notification :off

puts "Using Guardfile"

group :development do

  # Check for updated gems in project
  guard 'bundler' do
    watch('Gemfile')
  end

  if File.exists?("./config.rb")
    # Compile on start.
    puts `compass compile --time --quiet`
    guard :compass do
      watch(%r{(.*)\.s[ac]ss$})
    end
  end

  # Look for specified files in the current and child directories and watch for changes.
  require 'find'
  if Find.find(Dir.pwd).detect{|dir|dir=~/.+\.(scss|sass|css|js|html?|php|inc|theme|info)$/}
    guard :livereload do
      watch(%r{.+\.(scss|sass|css|js|html?|php|inc|theme|info)$})
    end
  end

end
