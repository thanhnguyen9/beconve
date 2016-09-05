# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160829013714) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.string   "location"
    t.text     "device"
    t.text     "model"
    t.text     "color"
    t.text     "issue"
    t.integer  "price"
    t.string   "customer_id"
    t.text     "customer_phone"
    t.text     "customer_email"
    t.string   "charge_id"
    t.integer  "user_id"
    t.text     "request_status", default: "open"
    t.string   "info"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",        null: false
    t.string   "encrypted_password",     default: "",        null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,         null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.string   "stripe_publishable_key"
    t.string   "stripe_provider"
    t.string   "stripe_uid"
    t.string   "stripe_access_code"
    t.text     "name"
    t.string   "address"
    t.text     "phone"
    t.float    "latitude"
    t.float    "longitude"
    t.text     "warranty"
    t.text     "response_time"
    t.float    "rating"
    t.integer  "reviews"
    t.string   "reviews_link"
    t.integer  "device_count"
    t.string   "image"
    t.text     "status",                 default: "offline"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
