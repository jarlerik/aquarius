class CreateOpens < ActiveRecord::Migration[5.0]
  def change
    create_table :opens do |t|
      t.string :weekday
      t.string :weekday_sv
      t.string :opentime

      t.timestamps
    end
  end
end
