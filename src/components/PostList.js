import React, {Component} from 'react';
import Post from './Post';

class PostList extends Component{
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
          {
            id: 2,
            author: {
                name: "Gabriel Lisboa",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              date: "05 Jun 2019",
              content: "Fala galera, beleza? Estou fazendo o bootcamp da rocketseat, vamos trocar uma ideia.",
              comments: [
                {
                  id: 1,
                  author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                  },
                  content: "Conteúdo do comentário"
                }
              ]
            // Restante dos dados de um novo post
          }
        ]
      };

      render(){
          return (
              <div className="postlist" >
              
                  
                  {this.state.posts.map(post => (
                      <Post key={post.id} data={post} />
                  ))}
                
              
              </div>
          )
      }
    
}

export default PostList;