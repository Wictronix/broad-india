import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MoreCategorySection({ tags, loading }) {
    return (
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
                        tags.length > 0 ? (
                            <>
                                {
                                    tags.map((tag, index) => {
                                        return (
                                            <div className="col-md-6 col-lg-4 p-2">
                                                <Card className="p-0 hover-card">
                                                    <Link
                                                        className="p-3 w-100 h-100 d-flex align-items-center justify-content-between"
                                                        to={`/blogs-and-articles/tag/${tag.id}`}
                                                        style={{
                                                            textTransform: "capitalize"
                                                        }}
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
                            </>
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
                                <p>No Categories To Show</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}
