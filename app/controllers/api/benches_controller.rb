class Api::BenchesController < ApplicationController
  def index
    # @benches = bounds ? Bench.in_bounds(params[:bounds]) : Bench.all
    
    @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
    
    if params[:min_seating] && params[:max_seating]
      @benches = @benches.where(seating: seating_range)
    end

    render "api/benches/index"
  end

  def create
    @bench = Bench.create!(bench_params)
    render "api/benches/show"
  end

  def show
    # difference between find_by(needs key) & find
    @bench = Bench.find_by(id: params[:id])
    
  end

  private
  def seating_range
    (params[:min_seating]..params[:max_seating])
  end
  # where is param[:min_seating] being initialized?


  def bench_params
    params.require(:bench).permit(:lat,
      :lng,
      :description, :seating)
  end

end
