import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="max-w-full mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">My Blog</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full mb-2"
          required
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          placeholder="Write your content here..."
          className="border p-2 w-full mb-2"
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['link', 'image', 'video'],
              ['clean']
            ],
          }}
        />
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className="mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Publish
        </button>
      </form>

      <div>
        {posts.map((post, index) => (
          <div key={index} className="border-b mb-5 pb-5">
            <h2 className="text-xl font-bold">{post.title}</h2>
            {post.image && <img src={post.image} alt="Blog" className="w-full h-auto my-2" />}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBlog;
