class Api::BenchesController < ApplicationController
  def index
    # @benches = bounds ? Bench.in_bounds(params[:bounds]) : Bench.all
    debugger
    @benches = params[:filters] ? Bench.in_bounds(params[:filters]) : Bench.all
    debugger
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
      :description, :filters)
  end

end
