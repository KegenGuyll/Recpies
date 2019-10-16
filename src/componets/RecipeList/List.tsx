import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import { ListGroup } from 'react-bootstrap';

interface State {}

interface StateProps {
  recipes: any[];
  remote_recipes: any[];
}

interface Props {
  getData?: any;
  recipes?: any[];
  remote_recipes: any[];
}

interface RecipePayload {
  f2f_url: string;
  image_url: string;
  publisher: string;
  recipe_id: string;
  social_rank: number;
  title: string;
}

const mapStateToProps = (state: StateProps) => {
  return { recipes: state.recipes, remote_recipes: state.remote_recipes };
};

class List extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ListGroup>
        {this.props.remote_recipes.map((recipe: RecipePayload) => (
          <ListGroup.Item key={recipe.recipe_id}>{recipe.title}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(List);
