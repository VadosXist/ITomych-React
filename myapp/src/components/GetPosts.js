import React from "react";
import Item from "./Item"

class GetPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
        this.downloadPosts = this.downloadPosts.bind(this)
    }

    downloadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(
                (result) => {
                    const posts = result.filter((item, idx) => idx < 10)
                    console.log(posts);
                    this.setState({
                        isLoaded: true,
                        posts
                    });
                })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    renderPosts() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <ul>
                    {posts.map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.downloadPosts}>Get Posts</button>
                {this.state.posts.length > 0 ? this.renderPosts()
                    : <div>Нажми кнопку , чтоб загрузить посты</div>}
            </div>
        )
    }
}

export default GetPosts;