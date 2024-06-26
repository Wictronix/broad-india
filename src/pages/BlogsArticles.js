import React, { useRef, useState } from "react";
import { Button, Carousel, Container, Image } from "react-bootstrap";
import { useParams, Link, json } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import RecentNews from "../components/RecentNews";

export default function BlogsArticles() {
	const [isMobile, setIsMobile] = React.useState(true);
	const [blogsPerPage, setBlogsPerPage] = useState(4);
	const [startBlogIndex, setStartBlogIndex] = useState(0);
	const [blogs, setBlogs] = useState({ arr: [] });
	const [articles, setArticles] = useState({ arr: [] });

	React.useEffect(() => {
		setIsMobile(window.innerWidth < 768);
		window.scrollTo(0, 0);

		const query = `
			query GetUserArticles {
				user(username: "aayush7908") {
					posts(pageSize: 6, page: 1) {
					edges {
						node {
							subtitle
							title
							brief
							content {
								html,
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
		}`;

		fetch("https://gql.hashnode.com/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ query })
		})
			.then((promise) => {
				promise = promise.json()
					.then((data) => {
						data = data.data.user.posts.edges;
						console.log(data);
						data.forEach((post) => {
							post = post.node;
							if (post.subtitle && post.subtitle.toLowerCase() === "blog") {
								const newBlogs = { ...blogs };
								newBlogs.arr.push(post);
								setBlogs((blog) => { return newBlogs });
							} else {
								const newArticles = { ...articles };
								newArticles.arr.push(post);
								setArticles((article) => { return newArticles });
							}
						});
						console.log(blogs);
					});
			})
			.catch((error) => {
				console.log("Unable to fetch data");
			});
	}, []);

	return (
		<div>
			<NavbarComp />
			<Container style={{ marginTop: "10rem", color: "#37373c" }}>

				{/* HEADING */}
				<div style={{
					textAlign: "center"
				}}>
					<h2>Welcome to our Blogs and Articles section!</h2>
					<p style={{
						fontSize: "2rem",
						fontWeight: "lighter"
					}}>
						Explore our latest insights and stories on various topics.
					</p>
				</div>


				{/* BLOGS CAROUSEL */}
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
							Blogs
						</p>
						<div style={{
							display: "flex",
							gap: "1rem"
						}}>
							<Button
								style={{
									backgroundColor: "transparent",
									border: "none",
									padding: "0"
								}}
								onClick={() => {
									setStartBlogIndex((prevIndex) => {
										return (
											prevIndex > 0 ? prevIndex - 1 : blogs.arr.length - blogsPerPage
										);
									});
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									style={{
										width: "1.3rem",
									}}
								>
									<path fill="#7f7f7f" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
								</svg>
							</Button>
							<Button
								style={{
									backgroundColor: "transparent",
									border: "none",
									padding: "0"
								}}
								onClick={() => {
									setStartBlogIndex((prevIndex) => {
										return (
											prevIndex < blogs.arr.length - blogsPerPage ? prevIndex + 1 : 0
										);
									});
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									style={{
										width: "1.3rem"
									}}
								>
									<path fill="#7f7f7f" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
								</svg>
							</Button>
						</div>
					</div>
					{
						(blogs.arr.length > 0) ? (
							<div style={{
								marginTop: "2rem",
								marginBottom: "2rem"
							}}>
								<div style={{
									position: "relative",
									width: "100%",
									overflow: "hidden"
								}}>
									<div style={{
										display: "flex",
										width: "100%",
										transition: "transform 0.5s ease-in-out",
										transform: `translateX(-${startBlogIndex * 25}%)`
									}}>
										{
											blogs.arr.map((blog, index) => {
												return (
													<div
														key={index}
														style={{
															flex: "0 0 25%",
															padding: "0.7rem"
														}}
													>
														<Link
															style={{
																textAlign: "left",
																textDecoration: "none",
																color: "#37373c"
															}}
															to={`/blogs/${blog.id}`}
														>
															<Image
																src={blog.coverImage !== null ? blog.coverImage.url : "./logo512.png"}
																style={{
																	borderRadius: "0.5rem",
																	width: "100%",
																	maxHeight: "10rem",
																	overflow: "hidden"
																}}
															/>
															<p style={{
																marginTop: "1rem",
																fontSize: "1.1rem",
																overflow: "hidden",
																paddingLeft: "0.2rem",
																paddingRight: "0.2rem"
															}}>
																{blog.title}
															</p>
														</Link>
													</div>
												);
											})
										}
									</div>
								</div>
							</div>
						) : (
							<p>No Blogs ...</p>
						)
					}
				</div>


				{/* CATEGORIES */}

				{/* ARTICLES */}
				<div style={{
					marginLeft: "10rem",
					marginRight: "10rem"
				}}>
					<div style={{
						borderBottom: "solid #d7d7da 0.1rem",
						display: "flex",
						justifyContent: "space-between"
					}}>
						<p style={{
							fontSize: "1.5rem",
							marginBottom: "0.5rem"
						}}>
							Articles
						</p>
						<div style={{
							display: "flex",
							gap: "1rem",
							borderBottom: "solid #a3a3aa"
						}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								style={{
									width: "1rem"
								}}
							>
								<path fill="#a3a3aa" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
							</svg>
							<input
								placeholder="Search"
								style={{ border: "none", width: "6rem" }}
							/>
						</div>
					</div>
					{
						(articles.arr.length > 0) ? (
							<div style={{
								marginTop: "2rem",
								marginBottom: "2rem"
							}}>
								<div style={{
									display: "grid",
									gap: "3rem"
								}}>
									{
										articles.arr.map((article, index) => {
											return (
												<Link
													key={index}
													to={`/article/${article.id}`}
													style={{
														display: "flex",
														gap: "2rem",
														textDecoration: "none",
														color: "#37373c",
														width: "100%"
													}}
												>
													<div style={{
														flex: "0 0 25%"
													}}>
														<Image
															style={{
																borderRadius: "0.5rem",
																width: "100%"
															}}
															src={article.coverImage !== null ? article.coverImage.url : "./logo512.png"}
														/>
													</div>
													<div style={{
														flex: "0 0 75%",
														display: "flex",
														flexDirection: "column"
													}}>
														<h3 style={{
															color: "#62626c"
														}}>
															{article.title}
														</h3>
														<p style={{
															fontSize: "1.1rem"
														}}>
															{`${article.brief}...`}
														</p>
														{
															article.author && (
																<i style={{
																	textTransform: "uppercase",
																	fontWeight: "bold"
																}}>
																	BY {article.author}
																</i>
															)
														}
													</div>
												</Link>
											);
										})
									}
								</div>
								<div style={{
									margin: "2rem",
									display: "flex",
									justifyContent: "center"
								}}>
									<Button style={{
										backgroundColor: "transparent",
										border: "none",
										color: "#37373c",
										fontSize: "1.3rem",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										gap: "0.5rem",
										padding: "0"
									}}>
										Next
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											style={{
												width: "1.3rem"
											}}
										>
											<path fill="#37373c" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
										</svg>
									</Button>
								</div>
							</div>
						) : (
							<p>No Articles ...</p>
						)
					}
				</div>
			</Container>
			<Footer />
		</div>
	);
}
