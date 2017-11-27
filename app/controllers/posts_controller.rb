class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET api/posts
  def index
    @posts = Post.all

    render json: @posts
  end

end