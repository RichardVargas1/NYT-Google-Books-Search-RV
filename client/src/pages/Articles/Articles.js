
// class Articles extends Component {
//     // initial state
//     state = {
//         articles: [],
//         title: "",
//         author: ""
//     };

//     // Loads all articles and save them to this.state.articles, when component mounts
//     componentDidMount() {
//         this.loadArticles();
//     }

//     // Loads all articles
//     loadArticles = () => {
//         API.getArticles()
//             .then(res =>
//                 this.setState({ articles: res.data, title: "", author: "" })
//             )
//     };

//     // Deletes a article from the database with a given id, then reloads articles from the db
//     deleteArticle = id => {
//         API.deleteArticle(id)
//             .then(res => this.loadArticles())
//     };

//     // Handles updating component state when the user types into the input field
//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };

//     // When the form is submitted, use the API.saveArticle method to save the article data
//     handleFormSubmit = event => {
//         event.preventDefault();
//         if (this.state.title && this.state.author) {
//             API.saveArticle({
//                 title: this.state.title,
//                 author: this.state.author,
//             })
//                 .then(res => this.loadArticles())
//         }
//     };

//     render() {
//         return (
//             <Container fluid>
//                 <Row>
//                     <Col size="md-6">
//                         <Jumbotron>
//                             <h1>What Articles Should I Take a Look At?</h1>
//                         </Jumbotron>
//                         <form>
//                             <Input
//                                 value={this.state.title}
//                                 onChange={this.handleInputChange}
//                                 name="title"
//                                 placeholder="Title (required)"
//                             />
//                             <Input
//                                 value={this.state.author}
//                                 onChange={this.handleInputChange}
//                                 name="author"
//                                 placeholder="Author (required)"
//                             />
//                             <FormBtn
//                                 disabled={!(this.state.author && this.state.title)}
//                                 onClick={this.handleFormSubmit}
//                             >
//                                 Submit Article
//               </FormBtn>
//                         </form>
//                     </Col>
//                     <Col size="md-6 sm-12">
//                         <Jumbotron>
//                             <h1>Articles On My List</h1>
//                         </Jumbotron>
//                         {this.state.articles.length ? (
//                             <List>
//                                 {this.state.articles.map(article => {
//                                     return (
//                                         <ListItem key={article._id}>
//                                             <a href={"/articles/" + article._id}>
//                                                 <strong>
//                                                     {article.title} by {article.author}
//                                                 </strong>
//                                             </a>
//                                             <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
//                                         </ListItem>
//                                     );
//                                 })}
//                             </List>
//                         ) : (
//                                 <h3>No Results to Display</h3>
//                             )}
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default Articles;
