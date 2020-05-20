class CreateInteractions < ActiveRecord::Migration[6.0]
  def change
    create_table :interactions do |t|
      t.integer :connection_id
      t.string :method
      t.text :notes

      t.timestamps
    end
  end
end
