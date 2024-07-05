// NOTE: This Page is same for both blog and article.
// This Page is visible after user clicks on any category (tag).
// It shows all blogs and articles of selected category.





import React, { useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import MoreCategorySection from "../components/MoreCategorySection";
import ArticleCard from "../components/ArticleCard";
import { initialQuery, postsByCategoryQuery } from "../utils/hashnodeQuery";

export default function BlogsByCategory() {
	const [isMobile, setIsMobile] = React.useState(true);
	const [loading, setLoading] = useState(true);
	const [currentTag, setCurrentTag] = useState("");
	const [tags, setTags] = useState([]);
	const [articles, setArticles] = useState({ arr: [] });
	const { id } = useParams();

	const fetchData = async () => {
		try {
			let query = initialQuery();
			const promise = await fetch("https://gql.hashnode.com/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ query })
			});
			const res = await promise.json();
			const newTags = res.data.user.tagsFollowing;
			const totalPages = res.data.user.posts.totalDocuments;

			let newArticles = { arr: [] };

			for (let page = 1; page <= totalPages; page++) {
				query = postsByCategoryQuery(page, id);

				const promise = await fetch("https://gql.hashnode.com/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ query })
				});
				const res = await promise.json();
				const data = res.data.user.posts.edges;
				data.forEach((post) => {
					post = post.node;
					newArticles.arr.push(post);
				});
			}

			for (let i = 0; i < newTags.length; i++) {
				if (newTags[i].id === id) {
					setCurrentTag((currentTag) => { return newTags[i].name });
					break;
				}
			}
			setTags((tags) => { return newTags });
			setArticles((article) => { return newArticles });
			setLoading(false);
		} catch (err) {
			alert("Some Error Occurred !!!");
		}
	}


	React.useEffect(() => {
		setIsMobile(window.innerWidth < 768);
		window.scrollTo(0, 0);
		fetchData();
	}, [id]);

	return (
		<div>
			<NavbarComp />
			<Container style={{
				marginTop: "10rem",
				marginBottom: "5rem",
				color: "#37373c",
				display: "flex",
				flexDirection: "column",
				gap: "5rem",
			}}>
				<h3 style={{
					marginBottom: "-3rem",
					textAlign: "center"
				}}>
					Showing Results For "<span style={{ textTransform: "capitalize" }}>{currentTag}</span>" Category
				</h3>
				{
					loading ? (
						<div style={{
							minHeight: "10rem",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "1.5rem"
						}}>
							<p>Loading ...</p>
						</div>
					) : (
						<>
							{
								(articles.arr.length > 0) ? (
									<div className="row">
										{
											articles.arr.map((article, index) => {
												return (
													<div className="col-md-6 col-lg-4 p-3" key={index}>
														<ArticleCard article={article} type={"article"} />
													</div>
												)
											})
										}
									</div>
								) : (
									<div style={{
										minHeight: "10rem",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										fontSize: "2rem",
										fontWeight: "bold",
										color: "red"
									}}>
										<p>No Articles To Show</p>
									</div>
								)
							}
						</>
					)
				}

				{/* CATEGORIES */}
				<div>
					<MoreCategorySection tags={tags} loading={loading} />
				</div>
			</Container>
			<Footer />
		</div>
	);
}
