class Price < ActiveRecord::Base
  belongs_to :user

  scope :prices_search_for_model_and_issue, ->(model, issue) { where(model: model, issue: issue) }
end
