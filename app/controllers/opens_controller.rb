class OpensController < ApplicationController
  def index
    @opens = Open.all.order(:order)

    render json: @opens
  end
end
