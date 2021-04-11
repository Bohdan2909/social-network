import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

import s from './MyPosts.module.css';
import Post from './Post/Post';

let maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo (props => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => { props.addPost(values.newPostText); }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

let AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder='Post message' />

            </div>
            <div>
                <button >Add post</button>
            </div>
        </form >
    )
}
let AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)
export default MyPosts;