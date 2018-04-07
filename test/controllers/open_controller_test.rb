require 'test_helper'

class OpenControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get open_index_url
    assert_response :success
  end

end
