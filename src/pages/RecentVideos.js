import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import ArticleCard from "../components/ArticleCard";

export default function RecentVideos() {
    const [isMobile, setIsMobile] = React.useState(true);
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState({ arr: [] });

    const getQuery = (page, pageSize) => {
        return (
            `query GetUserArticles {
				user(username: "broadindia") {
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
								tags {
									name
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
        try {
            const pageSize = 5;
            let totalPages = 1;
            let newArticles = { arr: [] };

            for (let page = 1; page <= totalPages; page++) {
                const query = getQuery(page, pageSize);
                const promise = await fetch("https://gql.hashnode.com/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ query })
                });
                const res = await promise.json();

                totalPages = Math.ceil(res.data.user.posts.totalDocuments / pageSize);
                const data = res.data.user.posts.edges;

                data.forEach((post) => {
                    post = post.node;
                    if (post.subtitle && post.subtitle.toLowerCase().startsWith("video")) {
                        newArticles.arr.push(post);
                    }
                });
            }

            setArticles((articles) => { return newArticles });
            setLoading(false);
        } catch (err) {
            alert("Some Error Occurred !!!");
        }
    }


    React.useEffect(() => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 768);
        window.scrollTo(0, 0);
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
                <div className="text-center" style={{ marginBottom: "-3rem" }}>
                    <h1>Recent Videos</h1>
                </div>
                {
                    loading ? (
                        <div style={{
                            minHeight: "20rem",
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
                                                        <ArticleCard article={article} type={"recent-video"} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ) : (
                                    <div style={{
                                        minHeight: "20rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        color: "red"
                                    }}>
                                        <p>No Videos To Show</p>
                                    </div>
                                )
                            }
                        </>
                    )
                }
            </Container>
            <Footer />
        </div>
    );
}
