import React from "react";
import '../css/Home.css';
import send from '../img/send.png'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPosts: false
		}
		this.changeShowPost = this.changeShowPost.bind(this)
	}
	changeShowPost(event) {
		if(event.target.className !== 'home-modal' && event.target.className !== 'home-comment-input' && event.target.className !== 'home-send-img') {
			this.setState({
				showPost: !this.state.showPost
			})
		}
	}
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
				caption: "",
				body: "I want to write something here but i don't know what, so i just put this here to let me know if the page is responsive, if not i will delete this and put something else here, i don't know what else to put here, i just want to make sure the page is responsive, and i have to do this text a very long one as the only way of knowing if the page is responsive is by seeing if the text is long enough, and if it is long enough then the page is responsive, if not then the page is not responsive",
				bodyimg: [
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					}
				],
				likes: "10",
				comment: "2",
				shares: "1",
				date: "1 day ago",
				comments: [
					{
						user: "user1",
						comment: "This is the comment one that i want to share with you all, i hope you like it, i don't know what else to say, i just want to make sure the page is responsive, and i have to do this text a very long one as the only way of knowing if the page is responsive is by seeing if the text is long enough, and if it is long enough then the page is responsive, if not then the page is not responsive",
						date: "1 day ago",
					},
					{
						user: "user2",
						comment: "This is the comment of your hearth that you might want to share with your friends and family and the world at large and the universe",
						date: "1 month ago",
					},
					{
						user: "user3",
						comment: "This is the comment of your head",
						date: "1 week ago",
					},
				]
			},
			{
				user: "user2",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption21",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				bodyimg: [
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					}
				],
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
				caption: "This is a caption12",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				bodyimg: [
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
				],
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
				caption: "This is a caption1",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				bodyimg: [
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					},
				],
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
				caption: "This is a caption2",
				body: "This is a bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
				bodyimg: [
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
						1: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					}
				],
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
				user: "user6",
				src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				caption: "This is a caption3",
				body: "sdjfnbsidjfnisd",
				bodyimg: [
					{
						0: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
						1: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					}
				],
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
		// var showPost = this.state.showPost;
		// var showPostClick = event => {this.state.showPost = !this.state.showPost};
		return (
			<div className="home-container">
				{this.state.showPost ? <div onClick={e => {this.changeShowPost(e)}} className="home-modal-container">
					<div className="home-modal">
						HOlaa
					</div>
				</div> : null}	
			<div className="home-main-container">
				<div className="home-posts-container">
					{posts.map((post, index) => 
					<div onClick={e => {this.changeShowPost(e)}} key={"post-" + index} id={"post-" + index} className="home-each-post-container">
						<div className="home-post-container">
							<div className="home-title-post">{post.caption}</div>
							<hr />
							<div className="home-post-inline" >
								{post.bodyimg.map((img, index) =>
								<div style={{display: "contents"}}>
									{index === 0 ? <div key={"postImage_" + index} className={post.bodyimg.length <= 1 ? "home-post-img" : "home-post-images"}>
										<img style={{height : "100%", objectFit : 'cover'}} src={img[0]} alt="post-picture" />
									</div> : index === 1 ? 
									<div key={"postImage_" + index} className={post.bodyimg.length <= 2 ? "home-post-images" : "home-post-half-images"}>
										<img style={post.bodyimg.length <= 2 ? {height: "100%", objectFit : 'cover'} : {height: "50%", objectFit : 'cover', marginBottom : "2%"}} src={img[0]} alt="post-picture" />
										{post.bodyimg.length > 2 ?
										post.bodyimg.length >= 4 ?
										<div className="home-morethan4-pics"><img className="home-morepics" src={img[0]} alt="post-picture" /></div> : 
										<img style={{height: "50%", objectFit : 'cover', marginTop : "2%"}} src={img[0]} alt="post-picture" />
										: null}
									 </div> : null} {/*index === 2 ? 
									<div key={"postImage_" + index} className="home-post-half-images">
										<br />
										<img style={{height : "100%"}} src={post.bodyimg[2][0]} alt="post-picture" />
									</div> :*/}
								</div>
								)}
								<div className="home-bodypost-container">
									<div  className="home-body-post">
										{post.body}
									</div>
									<hr />
									<div className="home-comment-container">
									{post.comments.map((comment, index) =>									
										index < 2 ?
										<div key={"comment_" + index} className="home-each-comment">
											<b>{comment.user}:</b> {comment.comment}
										</div>
										: <div></div>
									)}
									</div>
									<div className="home-send-commentContainer">
										<input className="home-comment-input" type="text" />
										<img src={send} className='home-send-img' alt="send" />
									</div>
								</div>
							</div>
						</div>
						<div className="home-avatar-post">
								<div className="home-avatar-background">
									<div className="home-topwing-post"></div>
									<img className="home-avatar-img" src={post.src} alt="avatar" />
									<div className="home-bottomwing-post"></div>
								</div>
							</div>
					</div>
					)}
				</div>
				<div className="home-viewpic-container">
					{ViewPics.map((pic, index) => 
						<div id={"pic-" + index}>
							<img className="home-viewpic-picture" src={pic.src} alt="" />
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