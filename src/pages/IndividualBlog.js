// NOTE: This Page is same for both blog and article.
// This Page is visible after user clicks on any blog or article.
// It shows full content of Selected blog or article.



import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import { individualPostQuery } from "../utils/hashnodeQuery";

export default function IndividualBlog({ isVideo }) {
    const [isMobile, setIsMobile] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
    const [videoHeight, setVideoHeight] = React.useState("600");
    const [title, setTitle] = React.useState("");
    const [subtitle, setSubtitle] = React.useState("");
    const [image, setImage] = React.useState("");
    const [content, setContent] = React.useState("");
    const [tags, setTags] = React.useState([]);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const query = individualPostQuery(id);

            const promise = await fetch("https://gql.hashnode.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query })
            })
            const res = await promise.json();
            let data = null;
            if (res.data.post) {
                data = res.data.post;
                setTitle(data.title);
                setSubtitle(data.subtitle);
                setImage(data.coverImage ? data.coverImage.url : "");
                setContent(data.content.html);
                setTags(data.tags);
            } else {
                setTitle(null);
                setImage(null);
                setContent(null);
            }
            setIsLoading(false);
        } catch (err) {
            alert("Some Error Occurred !!!");
        }
    }

    useEffect(() => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 768);
        if (screenWidth < 578) {
            setVideoHeight((videoHeight) => { return "250" });
        } else if (screenWidth < 991) {
            setVideoHeight((videoHeight) => { return "400" });
        } else if (screenWidth < 1280) {
            setVideoHeight((videoHeight) => { return "600" });
        }
        window.scrollTo(0, 0);
        fetchData();
    }, [id]);

    return (
        <div>
            <NavbarComp />
            <Container style={{ marginTop: "10rem", marginBottom: "5rem", minHeight: "25rem" }}>
                {
                    isLoading ? (
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
                                (title || image || content) ? (
                                    <div>
                                        <h1
                                            id="blogTitle"
                                            style={{
                                                textAlign: "center",
                                                fontWeight: "normal",
                                                marginBottom: "2rem"
                                            }}
                                        >
                                            {title}
                                        </h1>
                                        {
                                            isVideo ? (
                                                <iframe
                                                    style={{
                                                        width: "100%",
                                                        height: `${videoHeight}px`,
                                                        boxShadow: "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                                                        borderRadius: "0.5rem",
                                                        marginBottom: "4rem"
                                                    }}
                                                    src={`https://www.youtube.com/embed/${subtitle.substring(6)}`}
                                                    title={`${title}`}
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerpolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <Image
                                                    id="blogImage"
                                                    src={image}
                                                    style={{
                                                        width: "100%",
                                                        boxShadow: "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                                                        marginBottom: "4rem",
                                                        borderRadius: "0.5rem"
                                                    }}
                                                />
                                            )
                                        }
                                        <div
                                            id="blogContent"
                                            dangerouslySetInnerHTML={{ __html: content }}
                                            style={{
                                                fontSize: "1.1rem",
                                                marginBottom: "3rem",
                                                textAlign: "justify"
                                            }}
                                        ></div>
                                        <div>
                                            {
                                                tags.length > 0 && (
                                                    <div
                                                        className="d-flex align-items-center gap-3"
                                                        style={{
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        <p className="my-auto">Posted In: </p>
                                                        {
                                                            tags.map((tag, index) => {
                                                                return (
                                                                    <Link
                                                                        to={`/blogs-and-articles/tag/${tag.id}`}
                                                                        className="bg-primary text-white rounded-pill d-inline-block py-2 px-4 hover-card text-capitalize"
                                                                        key={index}
                                                                    >
                                                                        <p className="p-0 m-0">{tag.name}</p>
                                                                    </Link>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "3rem",
                                        color: "red"
                                    }}>
                                        Content Not Found !!!
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </Container>
            <Footer />
        </div>
    );
}
