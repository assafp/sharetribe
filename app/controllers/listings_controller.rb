class ListingsController < ApplicationController

  respond_to :html, :js

  before_filter :only => [ :new, :create ] do |controller|
    controller.ensure_logged_in "you_must_log_in_to_create_new_#{params[:type]}"
  end
  
  def show
    @listing = Listing.find(params[:id])
  end
  
  def new
    @listing = Listing.new
    @listing.listing_type = params[:type]
    @listing.category = params[:category] || "item"
    1.times {@listing.listing_images.build}
    respond_with(@listing)
  end
  
  def create
    @listing = @current_user.create_listing params[:listing]
    if @listing.new_record?
      render :action => :new
    else
      flash[:notice] = ["#{@listing.listing_type}_created_successfully", "create_new_#{@listing.listing_type}".to_sym, new_listing_path(:type => @listing.listing_type)]
      redirect_to @listing
    end
  end

  def switch_form_type
    @listing = Listing.new
    @listing_type = params[:type]
    @category = params[:category]
    respond_to do |format|
      format.html { render :action => :new }
      format.js 
    end
  end

end
