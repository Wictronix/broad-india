import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

export default function IndividualBlogArticle() {
    const [isMobile, setIsMobile] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
    const [title, setTitle] = React.useState("");
    const [image, setImage] = React.useState("");
    const [content, setContent] = React.useState("");
    const [tags, setTags] = React.useState([]);
    const { id } = useParams();

    const getQuery = (id) => {
        return (
            `query GetData {
                post(id: "${id}") {
                    title
                    content {
                        html
                    }
                    coverImage {
                        url
                    }
                    tags {
                        id
                        name
                    }
                }
            }`
        );
    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        // window.scrollTo(0, 0);

        const query = getQuery(id);

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
                        if (data.data.post) {
                            data = data.data.post;
                            setTitle(data.title);
                            setImage(data.coverImage ? data.coverImage.url : "");
                            setContent(data.content.html);
                            setTags(data.tags);
                        } else {
                            setTitle(null);
                            setImage(null);
                            setContent(null);
                        }
                        console.log(data);
                    });
            })
            .catch((error) => {
                console.log("Unable to fetch data");
                setTitle(null);
                setImage(null);
                setContent(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
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
                                                                        className="bg-primary text-white rounded-pill d-inline-block py-2 px-4 hover-card"
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
