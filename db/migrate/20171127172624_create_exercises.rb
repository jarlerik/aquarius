class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :title
      t.string :title_sv
      t.text :description
      t.text :description_sv

      t.timestamps
    end
  end
end
