class Api::BenchesController < ApplicationController
  def index
    render "api/benches/show"
  end

  def create
    @bench = Bench.create!(benches_params)
    render "api/benches/show"
  end

  private

  def benches_params
    params.require(:benches).permit(:lat,
      :lng,
      :description)
  end

end
