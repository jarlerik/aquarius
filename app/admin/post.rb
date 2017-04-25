ActiveAdmin.register Post do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

	permit_params :title, :message, :author, :title_sv, :message_sv

	form do |f|
		inputs "New post" do
			f.input :title, :label => "Title Suomi"
			f.input :title_sv, :label => "Title Svenska"
			f.input :message, :label => "Message body Suomi"
			f.input :message_sv, :label => "Message body Svenska"
			f.input :author, :label => "Written by"
		end
		f.actions
	end
end
