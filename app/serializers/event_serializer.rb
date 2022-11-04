class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :start_date_time, :end_date_time, :location, :category, :description
end
