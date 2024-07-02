import React, { useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

export default function BlogsByCategory() {
	const [isMobile, setIsMobile] = React.useState(true);
	const [loading, setLoading] = useState(true);
	const [tags, setTags] = useState([]);
	const [articles, setArticles] = useState({ arr: [] });
	const { id } = useParams();

	const getQuery = (page, pageSize, tag) => {
		return (
			`query GetUserArticlesByTag {
				user(username: "aayush7908") {
					tagsFollowing {
						name
						id
					}
					posts(pageSize: ${pageSize}, page: ${page}, filter: {tags: ["${tag}"]}) {
						edges {
							node {
								id
								subtitle
								title
								tags {
									name
								}
								content {
									text
								}
								coverImage {
									url
								}
							}
						}
						totalDocuments
					}
				}
			}`
		);
	};

	const fetchData = async () => {
		const pageSize = 20;
		let totalPages = 1;
		const newArticles = { arr: [] };
		setArticles((article) => { return newArticles });

		for (let page = 1; page <= totalPages; page++) {
			const query = getQuery(page, pageSize, id);

			const promise = await fetch("https://gql.hashnode.com/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ query })
			});
			let res = await promise.json();
			console.log(res);

			totalPages = Math.ceil(res.data.user.posts.totalDocuments / pageSize);
			const data = res.data.user.posts.edges;
			const newTags = res.data.user.tagsFollowing;
			setTags((tags) => { return newTags });
			data.forEach((post) => {
				post = post.node;
				const newArticles = { ...articles };
				newArticles.arr.push(post);
				setArticles((article) => { return newArticles });
			});
		}
		setLoading(false);
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
				{/* <div className="d-flex p-0" style={{margin: "-3rem 0rem"}}>
					<Link className="btn btn-secondary" to={"/blogs-and-articles"}>Back</Link>
				</div> */}
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
													<div className="col-md-6 col-lg-4 p-2">
														<Card
															className="hover-card"
															style={{
																borderRadius: '10px',
																textAlign: 'left',
																padding: '0px',
																height: '100%'
															}}
															key={index}
														>
															<Link
																to={`/article/${article.id}`}
																style={{
																	width: "100%",
																	borderRadius: '10px',
																	overflow: "hidden",
																	textDecoration: "none",
																	color: "black"
																}}
															>
																<div style={{
																	width: '100%',
																	height: '200px',
																	borderTopLeftRadius: '10px',
																	borderTopRightRadius: '10px',
																	overflow: "hidden"
																}}>
																	<Image
																		src={article.coverImage !== null ? article.coverImage.url : "./logo512.png"}
																		alt=""
																		style={{
																			width: '100%',
																			height: '100%',
																			borderTopLeftRadius: '10px',
																			borderTopRightRadius: '10px'
																		}}
																	/>
																</div>
																<div className="p-3">
																	<h1 style={{
																		margin: '15px 0',
																		fontSize: '1.5rem'
																	}}>
																		{article.title.substring(0, 60)}{article.title.length > 60 && "..."}
																	</h1>
																	<p>{article.content.text.substring(0, 150)}...</p>
																</div>
															</Link>
														</Card>
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
					<div style={{
						borderBottom: "solid #d7d7da 0.1rem",
						display: "flex",
						justifyContent: "space-between"
					}}>
						<p style={{
							fontSize: "1.5rem",
							marginBottom: "0.5rem"
						}}>
							More Categories
						</p>
					</div>
					<div className="mt-3 row">
						{
							tags.map((tag, index) => {
								return (
									<div className="col-md-6 col-lg-4 p-2">
										<Card className="p-0 hover-card">
											<Link
												className="p-3 w-100 h-100 d-flex align-items-center justify-content-between"
												to={`/blogs-and-articles/tag/${tag.id}`}
											>
												{tag.name}
												<svg style={{ height: "1rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
													<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
												</svg>
											</Link>
										</Card>
									</div>
								)
							})
						}
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
