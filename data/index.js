const programmes = require("./data/studyProgrammes");
const blogPosts = require("./data/blog");

function getAllStudyProgrammes() {
    return programmes;
}

function getStudyProgramme(slug) {
    const programme =  programmes.find(p => p.slug === slug);
    return programme ? JSON.parse(JSON.stringify(programme)): null;
}

function getAllBlogPosts() {
    return blogPosts;
}

function getBlogPost(slug) {
    const post = blogPosts.find(b => b.slug === slug);
    return post ? JSON.parse(JSON.stringify(post)): null;
}

module.exports = {
    getAllBlogPosts,
    getBlogPost,
    getAllStudyProgrammes,
    getStudyProgramme
}