class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :start_date_time
      t.string :end_date_time
      t.string :location
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
