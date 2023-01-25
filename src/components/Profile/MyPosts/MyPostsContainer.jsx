import { connect } from "react-redux";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      let action = onPostChangeActionCreator(text)
      dispatch(action)
    },
    addPost: () => {dispatch( addPostActionCreator() )}
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps ) (MyPosts)

export default MyPostsContainer