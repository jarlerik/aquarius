ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    div do
      columns do
        column max_width: '45%', min_width: '45%' do
          panel 'News' do
            ul class: 'post-list' do
              Post.all.map do |post|
                li class: 'post-list-item' do
                  link_to(post.title, admin_post_path(post))
                end
              end
            end
          end
        end
        column do
          panel 'Exercises' do
            ul class: 'exercise-list' do
              Exercise.all.map do |exercise|
                li class: 'exercise-list-item' do
                  link_to(exercise.title, admin_exercise_path(exercise))
                end
              end
            end
          end
        end
      end
    end
  end
end
