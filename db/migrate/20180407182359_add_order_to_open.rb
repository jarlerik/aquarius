class AddOrderToOpen < ActiveRecord::Migration[5.0]
  def change
    add_column :opens, :order, :integer
  end
end
