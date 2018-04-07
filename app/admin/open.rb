ActiveAdmin.register Open do
  permit_params :weekday, :weekday_sv, :opentime, :order

  form do |f|
		inputs "New opening" do
			f.input :weekday, :label => "day(s)"
			f.input :weekday_sv, :label => "Dag(s)"
			f.input :opentime, :label => "Time"
			f.input :order, :label => "Order (smaller shown first)"
		end
		f.actions
	end
end
