class CreateConnections < ActiveRecord::Migration[6.0]
  def change
    create_table :connections do |t|
      t.string :name
      t.string :email
      t.string :company
      t.string :title

      t.timestamps
    end
  end
end
