import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ArticleCard({ article, type }) {
    return (
        <Card
            className="hover-card"
            style={{
                boxShadow: 'none',
                border: 'none',
                borderRadius: '10px',
                textAlign: 'left',
                padding: '0px',
                height: '100%'
            }}
        >
            <Link
                to={`/${type}/${article.id}`}
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
                    borderRadius: '10px',
                    overflow: "hidden"
                }}>
                    {
                        type === "recent-video" ? (
                            <iframe
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                                    borderRadius: "0.5rem",
                                    marginBottom: "4rem"
                                }}
                                src={`https://www.youtube.com/embed/${article.subtitle.substring(6)}`}
                                title={`${article.title}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        ) : (
                            <Image
                                src={article.coverImage !== null ? article.coverImage.url : "../logo512.png"}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                    backgroundColor: "#d6ecfc"
                                }}
                            />
                        )
                    }
                </div>
                <div className="pt-3">
                    <h3 style={{
                        fontSize: '1.1rem',
                        color: "#007BFF",
                        textTransform: "capitalize",
                    }}>
                        {article.tags.length > 0 && article.tags[0].name}
                    </h3>
                    <h1 style={{
                        margin: '15px 0',
                        fontSize: '1.5rem'
                    }}>
                        {article.title.substring(0, 60)}{article.title.length > 60 && "..."}
                    </h1>
                    {/* <p>{article.content.text.substring(0, 150)}...</p> */}
                </div>
            </Link>
        </Card>
    );
}
