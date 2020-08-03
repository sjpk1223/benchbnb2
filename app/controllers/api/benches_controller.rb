class Api::BenchesController < ApplicationController
  def index
    # @benches = bounds ? Bench.in_bounds(params[:bounds]) : Bench.all
    
    @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all

    render "api/benches/index"
  end

  def create
    @bench = Bench.create!(benches_params)
    render "api/benches/show"
  end

  private

  def benches_params
    params.require(:benches).permit(:lat,
      :lng,
      :description, :filters, :bounds, :seating)
  end

end
