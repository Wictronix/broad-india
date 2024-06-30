import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

export default function IndividualBlogArticle() {
    const [isMobile, setIsMobile] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
    const [title, setTitle] = React.useState("");
    const [image, setImage] = React.useState("");
    const [content, setContent] = React.useState("");
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
                }
            }`
        );
    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        window.scrollTo(0, 0);

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
            <Container style={{ marginTop: "10rem", minHeight: "25rem" }}>
                {
                    isLoading ? (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "3rem",
                            color: "blue"
                        }}>
                            Loading ...
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
