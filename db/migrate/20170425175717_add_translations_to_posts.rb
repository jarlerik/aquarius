class AddTranslationsToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :title_sv, :string
    add_column :posts, :message_sv, :text
  end
end
