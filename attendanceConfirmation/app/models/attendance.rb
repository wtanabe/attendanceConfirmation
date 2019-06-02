class Attendance < ApplicationRecord
  belongs_to :event_date
  belongs_to :event_date_comment
  belongs_to :participant
  belongs_to :event
end
