const username = "broadindia";
const pageSize = 1;

export const initialQuery = () => {
	return `query GetData {
            user(username: "${username}") {
                tagsFollowing {
                    id
                    name
                }
                posts(pageSize: ${pageSize}, page: 1) {
                    totalDocuments
                }
            }
        }`;
}

export const mainPageQuery = (page) => {
	return `query GetData {
				user(username: "${username}") {
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
					}
				}
			}`;
}

export const postsByCategoryQuery = (page, tag) => {
	return `query GetData {
				user(username: "${username}") {
					posts(pageSize: ${pageSize}, page: ${page}, filter: {tags: ["${tag}"]}) {
						edges {
							node {
								id
								subtitle
								title
								tags {
									name
								}
								coverImage {
									url
								}
							}
						}
					}
				}
			}`;
}

export const allPostsQuery = (page) => {
	return `query GetUserPosts {
				user(username: "${username}") {
					posts(pageSize: ${pageSize}, page: ${page}) {
						edges {
							node {
								id
								subtitle
								title
								tags {
									name
								}
								coverImage {
									url
								}
							}
						}
					}
				}
			}`;
}

export const individualPostQuery = (id) => {
	return `query GetData {
                post(id: "${id}") {
                    title
                    subtitle
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
            }`;
}