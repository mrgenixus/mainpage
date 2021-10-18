require 'rails_helper'

describe "True = True for Rails" do
  it "doesn't fail" do
    visit root_path
    expect(page).to_not have_content "Welcome to Rails"
  end
end
