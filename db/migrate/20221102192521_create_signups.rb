class CreateSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :signups do |t|
      t.integer :event_id
      t.integer :volunteer_id
      t.string :task

      t.timestamps
    end
  end
end
