const Blog = () => {
    return (
        <div>
            <h1>Static Blog</h1>

            <a href="/blog/best-online-tool-to-review-code">
                <div className="w-full rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">This is a static and temporary blog post</div>
                        <p className="text-gray-700 text-base">
                            You need to add your articles manually in the static way. This is a temporary blog option to have the blog for the SaaS as fast as possible.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#saas-blog</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#static-articles</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#manually-added-blogs</span>
                    </div>
                    </div>
            </a>
        </div>
    )
}

export default Blog;