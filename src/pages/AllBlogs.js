// NOTE: This Page is same for both blog and article.
// This Page is visible after user clicks on view more button.
// It shows all blogs or articles depending on which section's `View More` button is pressed.





import React, { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import MoreCategorySection from "../components/MoreCategorySection";
import ArticleCard from "../components/ArticleCard";
import { allPostsQuery, initialQuery } from "../utils/hashnodeQuery";
import { fetchApi } from "../utils/fetchApi";

export default function AllBlogs({ type }) {
    const [isMobile, setIsMobile] = React.useState(true);
    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState([]);
    const [articles, setArticles] = useState({ arr: [] });
    const { id } = useParams();

    const fetchData = async () => {
        try {
            let query = initialQuery();
            const res = await fetchApi(query);
            const newTags = res.data.user.tagsFollowing;
            const totalPages = res.data.user.posts.totalDocuments;
            let newArticles = { arr: [] };

            for (let page = 1; page <= totalPages; page++) {
                const query = allPostsQuery(page);
                const res = await fetchApi(query);
                const data = res.data.user.posts.edges;
                data.forEach((post) => {
                    post = post.node;
                    if (type === "blog" && post.subtitle === "blog") {
                        newArticles.arr.push(post);
                    } else if (type === "article" && post.subtitle === "article") {
                        newArticles.arr.push(post);
                    }
                });
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
                <div className="text-center" style={{ marginBottom: "-3rem" }}>
                    <h1>{type === "article" ? "Articles" : "Blogs"}</h1>
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
                                    <div className="row">
                                        {
                                            articles.arr.map((article, index) => {
                                                return (
                                                    <div className="col-md-6 col-lg-4 p-3" key={index}>
                                                        <ArticleCard article={article} type={type} />
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
