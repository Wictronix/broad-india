import React, { useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import blogsHeader from "../assets/images/blogs-header.webp";
import MoreCategorySection from "../components/MoreCategorySection";

export default function BlogsArticles() {
	const [isMobile, setIsMobile] = React.useState(true);
	const [loading, setLoading] = useState(true);
	const [blogCarouselMove, setBlogCarouselMove] = useState("25");
	const [startBlogIndex, setStartBlogIndex] = useState(0);
	const [tags, setTags] = useState([]);
	const [mostImpBlog, setMostImpBlog] = useState(null);
	const [impBlogs, setImpBlogs] = useState({ arr: [] });
	const [blogs, setBlogs] = useState({ arr: [] });
	const [articles, setArticles] = useState({ arr: [] });
	const [videos, setVideos] = useState({ arr: [] });
	const [articlesPerPage, setArticlesPerPage] = useState(2);
	const [articlesPageNumber, setArticlesPageNumber] = useState(1);

	// Dummy Data ...
	// const videos = [
	// 	{
	// 		category: 'Environment',
	// 		title: 'How to Edit Videos Online in Wistia\'s Video Editor',
	// 		image: 'https://st.depositphotos.com/1005669/2996/i/450/depositphotos_29966311-stock-photo-renewable-energy.jpg',
	// 		link: '#',
	// 	},
	// 	{
	// 		category: 'HVAC',
	// 		title: 'The Best iPhone Camera Settings for Video in 2024',
	// 		image: 'https://t3.ftcdn.net/jpg/05/54/51/40/360_F_554514065_A5Y17mmaZgxkbcKri1g52RrLDtLzOU54.jpg',
	// 		link: '#',
	// 	},
	// 	{
	// 		category: 'VAM',
	// 		title: 'How to Download Wistia Videos',
	// 		image: 'https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535595_640.jpg',
	// 		link: '#',
	// 	},
	// ];

	const getQuery = (page, pageSize) => {
		return (
			`query GetUserArticles {
				user(username: "aayush7908") {
					tagsFollowing {
						id
						name
					}
					posts(pageSize: ${pageSize}, page: ${page}) {
						edges {
							node {
								id
								subtitle
								title
								brief
								tags {
									name
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
		const pageSize = 5;
		let totalPages = 1;
		let newMostImpBlog = null;
		let newImpBlogs = { arr: [] };
		let newBlogs = { arr: [] };
		let newArticles = { arr: [] };
		let newVideos = { arr: [] };
		let newTags = [];

		for (let page = 1; page <= totalPages; page++) {
			if (
				newMostImpBlog !== null &&
				newImpBlogs.arr.length >= 2 &&
				newBlogs.arr.length >= 4 &&
				newArticles.arr.length >= 4 &&
				newVideos.arr.length >= 3
			) {
				break;
			}
			const query = getQuery(page, pageSize);
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
			newTags = res.data.user.tagsFollowing;

			data.forEach((post) => {
				post = post.node;
				if (post.subtitle) {
					switch (post.subtitle.toLowerCase()) {
						case "most-imp":
							if (mostImpBlog === null) {
								newMostImpBlog = post;
							} else {
								newBlogs.arr.push(post);
							}
							break;
						case "imp":
							if (impBlogs.arr.length < 2) {
								newImpBlogs.arr.push(post);
							} else {
								newBlogs.arr.push(post);
							}
							break;
						case "blog":
							newBlogs.arr.push(post);
							break;
						case "article":
							newArticles.arr.push(post);
							break;
						default:
							if (post.subtitle.toLowerCase().startsWith("video")) {
								newVideos.arr.push(post);
							}
					}
				}
			});
		}

		setTags((tags) => { return newTags });
		setMostImpBlog((mostImpBlog) => { return newMostImpBlog });
		setImpBlogs((impBlog) => { return newImpBlogs });
		setBlogs((blog) => { return newBlogs });
		setArticles((article) => { return newArticles });
		setVideos((video) => { return newVideos });
		setLoading(false);
	}


	React.useEffect(() => {
		const screenWidth = window.innerWidth;
		setIsMobile(screenWidth < 768);
		if (screenWidth < 578) {
			setBlogCarouselMove((blogCarouselMove) => { return "100" });
		} else if (screenWidth < 991) {
			setBlogCarouselMove((blogCarouselMove) => { return "50" });
		} else if (screenWidth < 1280) {
			setBlogCarouselMove((blogCarouselMove) => { return "33.33" });
		}
		// window.scrollTo(0, 0);
		fetchData();
	}, []);

	return (
		<div>
			<NavbarComp />
			<Container style={{
				marginTop: "8rem",
				marginBottom: "5rem",
				color: "#37373c",
				display: "flex",
				flexDirection: "column",
				gap: "5rem"
			}}>

				{/* HEADER */}
				<div className="row">
					<div className="col-lg-8 pe-lg-3 pb-3">
						<div className="overflow-hidden" style={{ borderRadius: "1rem" }}>
							<Image src={blogsHeader} alt="" />
						</div>
						<div style={{ display: "flex", flexDirection: "column" }}>
							{
								mostImpBlog !== null && (
									<Card
										className="hover-card"
										style={{
											boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
											border: 'none',
											borderRadius: '10px',
											textAlign: 'left',
											padding: '0px',
											marginTop: '20px'
										}}
									>
										<Link
											to={`/blog/${mostImpBlog.id}`}
											style={{
												width: "100%",
												borderRadius: '10px',
												overflow: "hidden",
												textDecoration: "none",
												color: "black",
												padding: "20px 40px"
											}}
										>
											<div className="py-3">
												<h3 style={{
													fontSize: '1.1rem',
													color: "#007BFF"
												}}>
													{mostImpBlog.tags.length > 0 && mostImpBlog.tags[0].name}
												</h3>
												<h2 style={{
													fontSize: '1.5rem'
												}}>
													{mostImpBlog.title.substring(0, (isMobile ? 30 : 70))}{mostImpBlog.title.length > (isMobile ? 30 : 70) && "..."}
												</h2>
												<p>{mostImpBlog.brief.substring(0, 150)}...</p>
												<p>
													<svg style={{ height: "1.3rem", position: "relative" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
														<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
													</svg>
												</p>
											</div>
										</Link>
									</Card>
								)
							}
						</div>
					</div>
					<div className="col-lg-4 d-grid gap-3">
						{
							impBlogs.arr.map((blog, index) => {
								return (
									<Card
										className="hover-card"
										style={{
											boxShadow: 'none',
											border: 'none',
											borderRadius: '10px',
											textAlign: 'left',
											padding: '0px'
										}}
										key={index}
									>
										<Link
											to={`/blog/${blog.id}`}
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
												height: '250px',
												borderRadius: '10px',
												overflow: "hidden"
											}}>
												<Image
													src={blog.coverImage !== null ? blog.coverImage.url : "./logo512.png"}
													alt=""
													style={{
														width: '100%',
														height: '100%',
														borderTopLeftRadius: '10px',
														borderTopRightRadius: '10px',
														backgroundColor: "#d6ecfc"
													}}
												/>
											</div>
											<div className="py-3">
												<h3 style={{
													fontSize: '1.1rem',
													color: "#007BFF"
												}}>
													{blog.tags.length > 0 && blog.tags[0].name}
												</h3>
												<h2 style={{
													fontSize: '1.5rem'
												}}>
													{blog.title.substring(0, (isMobile ? 40 : 70))}{blog.title.length > (isMobile ? 40 : 70) && "..."}
												</h2>
											</div>
										</Link>
									</Card>
								)
							})
						}
					</div>
				</div>

				{/* BLOGS CAROUSEL */}
				<div>
					<div style={{
						borderBottom: "solid #d7d7da 0.1rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}}>
						<p style={{
							fontSize: "1.5rem",
							marginBottom: "0.5rem"
						}}>
							Blogs
						</p>
						<Link
							className="btn btn-primary"
							to={"/blog/all"}
							style={{
								color: "",
								textDecoration: "none",
							}}
						>
							View More
						</Link>
						{/* <div style={{
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
						</div> */}
					</div>
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
							<div>
								{
									(blogs.arr.length > 0) ? (
										<div style={{
											marginTop: "2rem",
										}}>
											<div style={{
												position: "relative",
												width: "100%",
												overflowX: `${isMobile ? "scroll" : "scroll"}`,
												scrollbarWidth: "none"
											}}>
												<div style={{
													display: "flex",
													width: "100%",
													transition: "transform 0.5s ease-in-out",
													transform: `translateX(-${startBlogIndex * blogCarouselMove}%)`
												}}>
													{
														blogs.arr.map((blog, index) => {
															return (
																<div
																	style={{
																		flex: `0 0 ${blogCarouselMove}%`,
																		padding: "0.7rem"
																	}}
																	key={index}
																>
																	<Link
																		className="hover-card"
																		to={`/blog/${blog.id}`}
																	>
																		<div style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
																			<Image
																				src={blog.coverImage !== null ? blog.coverImage.url : "./logo512.png"}
																				style={{
																					borderRadius: "0.5rem",
																					width: "100%",
																					height: "12rem",
																					overflow: "hidden",
																					backgroundColor: "#d6ecfc"
																				}}
																			/>
																		</div>
																		<h1 style={{
																			marginTop: "1rem",
																			fontSize: "1.3rem",
																			overflow: "hidden",
																			paddingLeft: "0.2rem",
																			paddingRight: "0.2rem"
																		}}>
																			{blog.title.substring(0, 40)}{blog.title.length > 40 && "..."}
																		</h1>
																	</Link>
																</div>
															);
														})
													}
												</div>
											</div>
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
											<p>No Blogs To Show</p>
										</div>
									)
								}
							</div>
						)
					}
				</div>

				{/* CATEGORIES */}
				<div>
					<MoreCategorySection tags={tags} loading={loading} />
				</div>

				{/* ARTICLES */}
				<div>
					<div style={{
						borderBottom: "solid #d7d7da 0.1rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}}>
						<p style={{
							fontSize: "1.5rem",
							marginBottom: "0.5rem"
						}}>
							Articles
						</p>
						<Link
							className="btn btn-primary"
							to={"/article/all"}
							style={{
								color: "",
								textDecoration: "none",
							}}
						>
							View More
						</Link>
					</div>
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
										<div style={{
											marginTop: "2rem",
											marginBottom: "2rem"
										}}>
											<div style={{
												display: "grid",
												gap: "3rem"
											}}>
												{
													articles.arr.slice((articlesPageNumber - 1) * articlesPerPage, articlesPageNumber * articlesPerPage).map((article, index) => {
														return (
															<Link
																key={index}
																to={`/article/${article.id}`}
																className="hover-card d-md-flex"
																style={{
																	gap: "2rem",
																	textDecoration: "none",
																	color: "#37373c",
																	width: "100%",
																	boxShadow: "none"
																}}
															>
																<div
																	className="mb-3 mb-md-0"
																	style={{
																		flex: "0 0 30%",
																		overflow: "hidden",
																		borderRadius: "0.5rem"
																	}}
																>
																	<Image
																		style={{
																			borderRadius: "0.5rem",
																			width: "100%",
																			height: "13rem",
																			backgroundColor: "#d6ecfc"
																		}}
																		src={article.coverImage !== null ? article.coverImage.url : "./logo512.png"}
																	/>
																</div>
																<div style={{
																	flex: "0 0 70%",
																	display: "flex",
																	flexDirection: "column",
																	paddingBottom: "0.5rem"
																}}>
																	<h1 style={{ fontSize: "1.8rem" }}>
																		{article.title.substring(0, (isMobile ? 25 : 55))}{article.title.length > (isMobile ? 25 : 55) && "..."}
																	</h1>
																	<p style={{
																		fontSize: "1.1rem"
																	}}>
																		{`${article.brief}...`}
																	</p>
																	<i style={{
																		textTransform: "uppercase",
																		fontWeight: "bold",
																		marginTop: "auto"
																	}}>
																		{
																			article.author ? (
																				`BY ${article.author}`
																			) : (
																				`BY BROAD GROUP`
																			)
																		}
																	</i>
																</div>
															</Link>
														);
													})
												}
											</div>
											<div style={{
												margin: "2rem",
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between"
											}}>
												<Button
													onClick={() => {
														setArticlesPageNumber((articlesPageNumber) => { return articlesPageNumber - 1 });
													}}
													disabled={articlesPageNumber === 1}
													style={{
														backgroundColor: `${isMobile ? "#229fff" : "transparent"}`,
														border: "none",
														color: "#37373c",
														fontSize: "1.3rem",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														gap: "0.5rem",
														padding: `${isMobile ? "0.5rem" : "0"}`
													}}
												>
													&lt; {!isMobile && "Prev"}
												</Button>
												<p>Page <b>{articlesPageNumber}</b> of <b>{Math.ceil(articles.arr.length / articlesPerPage)}</b></p>
												<Button
													onClick={() => {
														setArticlesPageNumber((articlesPageNumber) => { return articlesPageNumber + 1 });
													}}
													disabled={articlesPageNumber === Math.ceil(articles.arr.length / articlesPerPage)}
													style={{
														backgroundColor: `${isMobile ? "#229fff" : "transparent"}`,
														border: "none",
														color: "#37373c",
														fontSize: "1.3rem",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														gap: "0.5rem",
														padding: `${isMobile ? "0.5rem" : "0"}`
													}}
												>
													{!isMobile && "Next"} &gt;
												</Button>
											</div>
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
				</div>
			</Container>

			{/* RECENT VIDEOS */}
			<div
				className="p-3 p-md-5"
				style={{
					backgroundColor: '#007bff',
					paddingTop: "2rem",
					paddingBottom: "2rem",
					color: 'white',
				}}
			>
				<div className="row">
					<div className="col-lg-3 py-5 d-grid gap-2">
						<h4>
							<svg style={{ height: "1.3rem", marginRight: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
								<path fill="white" d="M256 0H576c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H552c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128h96V384v32c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V384H512v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V312c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H72zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H424c-8.8 0-16 7.2-16 16z" />
							</svg>
							Recent Videos
						</h4>
						<h2>BROAD Group</h2>
						<p style={{ fontSize: "1.1rem" }}>Here's a look at recent activities of BROAD Group</p>
						<div>
							<Link
								className="hover-card"
								to={"/recent-videos"}
								style={{
									boxShadow: "none",
									color: "white",
									textDecoration: "none",
									fontWeight: "500"
								}}
							>
								<span>View All Videos</span>
								<svg style={{ height: "1.1rem", position: "relative", marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
								</svg>
							</Link>
						</div>
					</div>
					<div className="col-lg-9 d-md-flex justify-content-between">
						{
							videos.arr.map((video, index) => {
								return (
									<Card
										className="col-md-4 p-3"
										style={{
											border: 'none',
											backgroundColor: '#007bff',
											textAlign: 'left',
										}}
										key={index}
									>
										<Link
											className="hover-card"
											to={`/recent-video/${video.id}`}
											style={{
												height: '100%',
												backgroundColor: 'white',
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
												{/* <Image src={video.image} alt={video.title} style={{
													width: '100%',
													height: '200px',
													borderTopLeftRadius: '10px',
													borderTopRightRadius: '10px'
												}} /> */}
												<iframe
													style={{
														width: "100%",
														height: "100%",
														boxShadow: "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
														borderTopLeftRadius: "0.5rem",
														borderTopRightRadius: "0.5rem",
														marginBottom: "4rem"
													}}
													src={`https://www.youtube.com/embed/${video.subtitle.substring(6)}`}
													title={`${video.title}`}
													frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
													referrerpolicy="strict-origin-when-cross-origin"
													allowFullScreen
												/>
											</div>
											<div className="p-3" style={{ height: "100%" }}>
												<div>
													<h3 style={{
														margin: '15px 0',
														fontSize: '1.1em',
														color: "#007BFF",
														textTransform: "capitalize"
													}}>
														{video.tags.length > 0 && video.tags[0].name}
													</h3>
													<h2 style={{
														margin: '15px 0',
														fontSize: '1.3rem',
														fontWeight: 'normal',
													}}>
														{video.title.substring(0, 40)}{video.title.length > 40 && "..."}
													</h2>
												</div>
												<p
													style={{
														textAlign: "left",
														textDecoration: 'none',
														marginBottom: "0"
													}}
												>
													<span>See the full video</span>
													<svg style={{ height: "1.3rem", position: "relative", marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
														<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
													</svg>
												</p>
											</div>
										</Link>
									</Card>
								)
							})
						}
					</div>
				</div>
			</div>
			{/* recent videos closes */}

			{/* SUBSCRIBE EMAIL */}
			{/* <div className="text-center m-5 p-5 row gap-4" style={{ borderRadius: "1rem", backgroundColor: "#edf6ff" }}>
				<h3 style={{ fontWeight: "normal" }}>
					<span>Get latest news from</span>
					<span style={{ color: "#007BFF" }}> BROAD India </span>
					<span>in your inbox.</span>
				</h3>
				<form className="px-5 d-md-flex gap-2 col-lg-8 offset-lg-2">
					<input type="email" className="form-control mb-3 mb-md-0" placeholder="Email" />
					<button type="submit" className="btn btn-primary">Subscribe</button>
				</form>
			</div> */}
			{/* SUBSCRIBE EMAIL CLOSE */}
			<Footer />
		</div>
	);
}
