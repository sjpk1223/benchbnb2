class Bench < ApplicationRecord
    validates :description, :lat, :lng, :seating, presence: true

    # def self.in_bounds(bounds)
    #     Bench.where([bounds: {northEast, southWest}]);
    # end
    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lng < ?", bounds[:northEast][:lng])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
    end

      # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
end
