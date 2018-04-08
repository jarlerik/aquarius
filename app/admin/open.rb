ActiveAdmin.register Open do
  permit_params :weekday, :weekday_sv, :opentime, :order
  form do |f|
    inputs 'New opening' do
			f.input :weekday, label: 'day(s)', placeholder: 'Set day or days in finnish (e.g Maanatai, Perjantai or Maanantai - Torstai)'
			f.input :weekday_sv, label: 'day(s) (svenska)', placeholder: 'Set day or days in swedish (e.g Mondag, Fredag or Mondag - Torsdag)'
			f.input :opentime, :label => 'Time', placeholder: 'Set opening time (e.g 09:00 - 21:00)'
			f.input :order, label: 'order of importance', placeholder: 'Set order number (e.g give monday a 1 to show it first on the list)'
		end
		f.actions
	end
end
