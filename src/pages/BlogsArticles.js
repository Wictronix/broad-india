import React, { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
// import RecentNews from "../components/RecentNews";

export default function BlogsArticles() {
	const [isMobile, setIsMobile] = React.useState(true);
	const [loading, setLoading] = useState(true);
	const [blogsPerPage, setBlogsPerPage] = useState(4);
	const [startBlogIndex, setStartBlogIndex] = useState(0);
	const [blogs, setBlogs] = useState({ arr: [] });
	const [articles, setArticles] = useState({ arr: [] });
	const [articlesPerPage, setArticlesPerPage] = useState(2);
	const [articlesPageNumber, setArticlesPageNumber] = useState(1);

	// Dummy Data ...
	const videos = [
		{
			title: 'How to Edit Videos Online in Wistia\'s Video Editor',
			image: 'https://st.depositphotos.com/1005669/2996/i/450/depositphotos_29966311-stock-photo-renewable-energy.jpg',
			link: '#',
		},
		{
			title: 'The Best iPhone Camera Settings for Video in 2024',
			image: 'https://t3.ftcdn.net/jpg/05/54/51/40/360_F_554514065_A5Y17mmaZgxkbcKri1g52RrLDtLzOU54.jpg',
			link: '#',
		},
		{
			title: 'How to Download Wistia Videos',
			image: 'https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535595_640.jpg',
			link: '#',
		},
	];

	const projects = [
		{
			title: 'Sustainability in Action',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBJrozASVWA5lVbGzJXHovWYCPv4P6GDCcQ&s',
			link: '#',
			direction: 'left',
		},
		{
			title: 'Rethink Conventional Construction',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpT5oK1kePCta_uJFqTaTIf_sAC7nRcBPGeQ&s',
			link: '#',
			direction: 'right',
		},
	];


	// inline css classes ...
	const linkStyle = {
		textAlign: "left",
		color: 'white',
		textDecoration: 'none',
	};

	const linkHoverStyle = {
		textDecoration: 'underline',
	};

	const containerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '20px 0',
		backgroundColor: 'whites',
	};

	const projectStyle = {
		position: 'relative',
		color: 'white',
		textAlign: 'center',
		flex: 1,
	};

	const imageStyle = {
		width: '100%',
		height: '400px',

	};

	const overlayStyle = {
		position: 'absolute',
		bottom: '1px',
		left: '100px',
		right: '100px',
		backgroundColor: '#007bff',
		padding: '10px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: '3rem',
		paddingRight: '3rem'
	};

	const titleStyle = {
		margin: 0,
		maxWidth: '20rem',
		fontSize: '2rem',
		textAlign: 'left'
	};

	const arrowStyle = (direction) => ({
		fontSize: '1.5em',
		display: 'inline-block',
		transform: direction === 'left' ? 'rotate(180deg)' : 'none',
	});

	const getQuery = (page, pageSize) => {
		return (
			`query GetUserArticles {
				user(username: "aayush7908") {
					posts(pageSize: ${pageSize}, page: ${page}) {
						edges {
							node {
								id
								subtitle
								title
								brief
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
		const pageSize = 10;
		let totalPages = 1;

		for (let page = 1; page <= totalPages; page++) {
			const query = getQuery(page, pageSize);

			const promise = await fetch("https://gql.hashnode.com/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ query })
			});
			let data = await promise.json();

			totalPages = Math.ceil(data.data.user.posts.totalDocuments / pageSize);
			data = data.data.user.posts.edges;
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
		}
		setLoading(false);
	}


	React.useEffect(() => {
		setIsMobile(window.innerWidth < 768);
		// window.scrollTo(0, 0);
		fetchData();
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


				{/* BLOGS */}
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
																		className="link-hover"
																		to={`/blog/${blog.id}`}
																	>
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
																		<h2 style={{
																			marginTop: "1rem",
																			fontSize: "1.3rem",
																			overflow: "hidden",
																			paddingLeft: "0.2rem",
																			paddingRight: "0.2rem"
																		}}>
																			{blog.title}
																		</h2>
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
							</>
						)
					}
				</div>


				{/* CATEGORIES */}


				{/* ARTICLES */}
				<div style={{
					// marginLeft: "10rem",
					// marginRight: "10rem"
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
						{/* <div style={{
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
																style={{
																	display: "flex",
																	gap: "2rem",
																	textDecoration: "none",
																	color: "#37373c",
																	width: "100%"
																}}
																className="link-hover article-link"
															>
																<div style={{
																	flex: "0 0 30%"
																}}>
																	<Image
																		style={{
																			borderRadius: "0.5rem",
																			width: "100%",
																			maxHeight: "13rem",
																			backgroundColor: "#d6ecfc"
																		}}
																		src={article.coverImage !== null ? article.coverImage.url : "./logo512.png"}
																	/>
																</div>
																<div style={{
																	flex: "0 0 70%",
																	display: "flex",
																	flexDirection: "column"
																}}>
																	<h2>
																		{article.title}
																	</h2>
																	<p style={{
																		fontSize: "1.1rem"
																	}}>
																		{`${article.content.text.substring(0, 375)}...`}
																	</p>
																	<i style={{
																		textTransform: "uppercase",
																		fontWeight: "bold"
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
												justifyContent: "space-between"
											}}>
												<Button
													onClick={() => {
														setArticlesPageNumber((articlesPageNumber) => { return articlesPageNumber - 1 });
													}}
													disabled={articlesPageNumber === 1}
													style={{
														backgroundColor: "transparent",
														border: "none",
														color: "#37373c",
														fontSize: "1.3rem",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														gap: "0.5rem",
														padding: "0"
													}}
												>
													&lt; Prev
												</Button>
												<p>Page <b>{articlesPageNumber}</b> of <b>{Math.ceil(articles.arr.length / articlesPerPage)}</b></p>
												<Button
													onClick={() => {
														setArticlesPageNumber((articlesPageNumber) => { return articlesPageNumber + 1 });
													}}
													disabled={articlesPageNumber === Math.ceil(articles.arr.length / articlesPerPage)}
													style={{
														backgroundColor: "transparent",
														border: "none",
														color: "#37373c",
														fontSize: "1.3rem",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														gap: "0.5rem",
														padding: "0"
													}}
												>
													Next &gt;
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
			<div style={{
				backgroundColor: '#007bff',
				paddingTop: "2rem",
				paddingBottom: "2rem",
				paddingLeft: "7rem",
				paddingRight: "7rem",
				color: 'white',
			}}>
				<h2 style={{
					display: "flex",
					marginBottom: '20px',
				}}>Recent Videos</h2>
				<div style={{
					display: "flex",
					width: '100%',
					height: '1px',
					backgroundColor: 'white',
					marginBottom: '20px',
				}}></div>
				<div style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
					{videos.map((video, index) => (
						<div style={{
							backgroundColor: '#007bff',
							color: 'white',
							borderRadius: '10px',
							textAlign: 'left',
							width: '30%',
						}} key={index}>
							<img src={video.image} alt={video.title} style={{
								maxWidth: '100%',
								height: '300px',
								borderRadius: '10px',
							}} />
							<h3 style={{
								margin: '15px 0',
								fontSize: '1.1em',
							}}>{video.title}</h3>
							<a
								href={video.link}
								style={linkStyle}
								onMouseEnter={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
								onMouseLeave={(e) => (e.target.style.textDecoration = linkStyle.textDecoration)}
							>
								See the full article →
							</a>
						</div>
					))}
				</div>
			</div>
			{/* recent videos closes */}
			{/* new section */}
			<div style={containerStyle}>
				{projects.map((project, index) => (
					<div style={projectStyle} key={index}>
						<img src={project.image} alt={project.title} style={imageStyle} />
						<div style={overlayStyle}>
							{index === 0 && <span style={arrowStyle('left')}>→</span>}
							<p style={titleStyle}>{project.title}</p>
							{index === 1 && <span style={arrowStyle('right')}>→</span>}
						</div>
					</div>
				))}
			</div>
			{/* new section closed */}
			<Footer />
		</div>
	);
}
