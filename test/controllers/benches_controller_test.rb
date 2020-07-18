require 'test_helper'

class BenchesControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get benches_Index_url
    assert_response :success
  end

end
