class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :update, :destroy]

  # GET api/exercises
  def index
    @exercises = Exercise.all

    render json: @exercises
  end
end
