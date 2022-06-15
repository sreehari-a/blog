import Runner from "./runner";

class BlogService {
  runner;
  baseURL;
  constructor(baseUrl: string) {
    this.runner = new Runner();
    this.baseURL = baseUrl;
  }
  async getAllPosts() {
    const data = await this.runner.performGET(
      `${this.baseURL}/api/blogPosts`,
      {populate: 'cover'}
    );
    return data;
  }
  async getPostDetails(id: number) {
    const data = await this.runner.performGET(
      `${this.baseURL}/api/blogPosts/${id}`,
      {populate: '*'}
    );
    return data;
  }
}
export default BlogService;