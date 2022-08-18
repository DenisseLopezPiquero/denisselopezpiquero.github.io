import React from "react";
import '../css/Home.css'

export default class Home extends React.Component {
	render() {
		const ViewPics = [
			{
				user: "user1",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user2",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user3",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user4",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user5",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user6",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user7",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user8",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user9",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			{
				user: "user10",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
			
		];
		const posts = [
			{
				user: "user1",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				likes: "10",
				comment: "2",
				shares: "1",
				date: "1 day ago",
				comments: [
					{
						user: "user1",
						comment: "This is a comment",
						date: "1 day ago",
					},
				]
			},
			{
				user: "user2",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				likes: "10",
				comment: "2",
				shares: "1",
				date: "1 day ago",
				comments: [
					{
						user: "user1",
						comment: "This is a comment",
						date: "1 day ago",
					},
				]
			},
			{
				user: "user3",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				likes: "10",
				comment: "2",
				shares: "1",
				date: "1 day ago",
				comments: [
					{
						user: "user1",
						comment: "This is a comment",
						date: "1 day ago",
					},
				]
			},
			{
				user: "user4",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				likes: "10",
				comment: "2",
				shares: "1",
				date: "1 day ago",
				comments: [
					{
						user: "user1",
						comment: "This is a comment",
						date: "1 day ago",
					},
				]
			},
			{
				user: "user5",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				likes: "10",
				comment: "2",
				shares: "1",
				date: "1 day ago",
				comments: [
					{
						user: "user1",
						comment: "This is a comment",
						date: "1 day ago",
					},
				]
			},
		]
		return (
		<div className="home-container">
			<div className="home-main-container">
				<div className="home-posts-container">
					{posts.map((post) => 
					<div className="home-each-post-container">
						<div className="home-avatar-post">
							<div className="home-topwing-post"></div>
							<div className="home-avatar-background">
								<img className="home-avatar-img" src={post.src} alt="avatar" />
							</div>
							<div className="home-bottomwing-post"></div>
						</div>
					</div>
					)}
				</div>
				<div className="home-viewpic-container">
					{ViewPics.map((pic) => 
						<div>
							<img className="home-viepic-picture" src={pic.src} alt="" />
						</div>
					)}
				</div>
			</div>
			<div className="home-divisor-containers"></div>
			<div className="home-second-container">

			</div>
		</div>
		);
	}
}